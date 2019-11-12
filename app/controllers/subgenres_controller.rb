class SubgenresController < ApplicationController
  def new
    @subgenre = Subgenre.new
    @genres = Genre.all
  end

  def create
    @subgenre = Subgenre.new(subgenre_params)
    if @subgenre.save
      redirect_to root_path
    else
      redirect_to new_subgenre_path
    end
  end

  def destroy
    subgenre = Subgenre.find(params[:id])
    subgenre.destroy
    redirect_to root_path
  end

  private

  def subgenre_params
    params.require(:subgenre).permit(:name, :genre_id)
  end
end
