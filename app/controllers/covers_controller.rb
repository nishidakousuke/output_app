class CoversController < ApplicationController
  def index
  end

  def new
    @genre = Genre.new
  end

  def create
    @genre = Genre.new(genre_params)
    if @genre.save
      redirect_to root_path
    else
      redirect_to new_cover_path
    end
  end

  private

  def genre_params
    params.require(:genre).permit(:name)
  end
end
