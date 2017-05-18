json.set! "book" do
  json.partial! "api/audiobooks/book", book: @book
end
