class GenresController < ApplicationController
  def index
    @genres = Genre.all
    @outputs = Output.all
  end

  def new
    @genre = Genre.new
  end

  def create
    @genre = Genre.new(genre_params)
    if @genre.save
      redirect_to root_path
    else
      redirect_to new_genre_path
    end
  end

  def destroy
    genre = Genre.find(params[:id])
    genre.destroy
    redirect_to root_path
  end

  private

  def genre_params
    params.require(:genre).permit(:name)
  end
end
