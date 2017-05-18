export const fetchAudioBooks = book => (
  $.ajax({
    method: 'GET',
    url: 'api/audiobooks',
    data: book
  })
);

export const fetchAudionBook = id => (
  $.ajax({
    method: 'GET',
    url: `api/audiobooks/${id}`
  })
);

export const createAudioBook = book => (
  $.ajax({
    method: 'POST',
    url: 'api/audiobooks',
    data: {book}
  })
);
export const deleteAudioBook = id => (
  $.ajax({
    method: 'DELTE',
    url: `api/audiobooks/${id}`,
    data
  })
);
export const editAudioBook = data => (
  $.ajax({
    method: 'PATCH',
    url: 'api/audiobooks/',
    data
  })
);
