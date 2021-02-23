$('.search-button').on('click', function() {

  $.ajax({
    // url movienya akan menggunakan value apapun yang diinput pada class input-keyword
    url: 'http://www.omdbapi.com/?apikey=ed1aa720&s=' + $('.input-keyword').val(),
    // Jika berhasil
    success: results => {
      // results adalah object di dalam search, sehingga harus dikeluarkan terlebih dahulu
      const movies = results.Search;
      let cards = '';
      movies.forEach(m => {
        // menumpuk cards (BS) dengan fragments (m dan property pada API yang ingin digunakan)
        cards += showCards(m);
      });
      // jQuery akan mencari tag html dengan class .movie-container lalu htmlnya diganti dengan cards (yg telah ditumpuk)
      $('.movie-container').html(cards);

      // saat tombol detail diklik maka akan request ajax baru
      // jQuery akan mencari class .modal-detail-button lalu saat diklik akan menjalankan functin yang mengambil data imdbID nya
      // tidak pakai => karena membutuhkan this
      $('.modal-detail-button').on('click', function() {
        // console.log($(this).data('imdbid')); // untuk cek imdbID
        $.ajax({
          // jQuery akan mengambil tombol ini, dan mengambil attribute data imdb nya
          url: 'http://www.omdbapi.com/?apikey=ed1aa720&i=' + $(this).data('imdbid'),
          success: m => {
            const movieDetail = showMovieDetail(m);
            $('.modal-body').html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          }
        });
      });

    },
    // Jika gagal
    error: (e) => {
      console.log(e.responseText);
    }
  });

});



let showCards = m =>
  `<div class="col-md-4 my-3">
    <div class="card">
      <img src="${m.Poster}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
      </div>
    </div>
  </div>`;

let showMovieDetail = m =>
  `<div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <img src="${m.Poster}" class="img-fluid">
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item">
            <h4>${m.Title} (${m.Year})</h4>
          </li>
          <li class="list-group-item"><strong>Director: </strong> ${m.Director}</li>
          <li class="list-group-item"><strong>Actors: </strong> ${m.Actors}</li>
          <li class="list-group-item"><strong>Writer: </strong> ${m.Writer}</li>
          <li class="list-group-item"><strong>Plot: </strong><br> ${m.Plot}</li>
        </ul>
      </div>
    </div>
  </div>`;