class Api::AudiobooksController < ApplicationController

  def index
    @books = Audiobook.all
  end

  def show
    #testing
    # @book =  Audiobook.first
    #testing
    @book = Audiobook.find(params[:book][:id])
    render :show
  end

  def create
    @book = Audiobook.new(book_params)
    if @book.save
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  def destroy
    @book = Audiobook.find(params[:book][:id])
    if @book.destroy
      render :index
    else
      render json: ["here is nothing to delete"]
    end
  end

  def edit
    @book = Audiobook.find(params[:book][:id])
    render :show
  end

  def update
    @book = Audiobook.find(params[:book][:id])
    if @book.update(book_params)
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :audio_url, :user_id)
  end

end
