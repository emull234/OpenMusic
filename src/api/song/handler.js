class SongsHandler {
  constructor(service) {
    this._service = service;
  }

  postSongHandler(request, h) {
    const songId = 'asdasddsa';
    const response = h.response({
      status: 'success',
      message: 'Lagu berhasil ditambahkan',
      data: {
        songId,
      },
    });
    response.code(201);
    return response;
  }
}

module.exports = SongsHandler;
