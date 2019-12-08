class OutputsController < ApplicationController

  def new
    @output = Output.new
    @genre = Genre.find_by(id: params[:genre_id])
    @subgenre = Subgenre.find_by(id: params[:subgenre_id])
  end

  def create
    @output = Output.new(output_params)
    if @output.save
      redirect_to root_path
    else
      redirect_to new_output_path
    end
  end

  def show
    @output = Output.find(params[:id])
  end

  def edit
    @output = Output.find(params[:id])
  end

  def update
    @output = Output.find(params[:id])
    if @output.update(update_params)
      redirect_to root_path
    else
      redirect_to edit_output_path
    end
  end

  def destroy
    output = Output.find(params[:id])
    output.destroy
    redirect_to root_path
  end

  def search
    @outputs = Output.search(params[:keyword])
    respond_to do |format|
      format.html
      format.json
    end
  end

  private

  def output_params
    params.require(:output).permit(:title, :score, :explanation, :learn, :remark, :genre_id, :subgenre_id, :image)
  end

  def update_params
    params.require(:output).permit(:title, :score, :explanation, :learn, :remark, :genre_id, :subgenre_id, :image)
  end
end
