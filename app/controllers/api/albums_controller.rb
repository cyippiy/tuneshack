class Api::AlbumsController < ApplicationController
  def create
    @album = Album.new(album_params)

    if @album.save
      render "api/albums/show"
    else
      render json: @album.errors.full_messages, status:422
    end
  end

  def index
    @albums = Album.where(artist_id: params[:user_id]) unless params[:user_id].nil?
    @albums = Album.all if params[:user_id].nil?
  end

  def show
    @album = Album.find(params[:id])
    if @album
      render "api/albums/show"
    else
      render json: @album.errors.full_messages, status:422
    end
  end

    def search
    search = params[:search].downcase
    # debugger
    @albums = Album.where('lower(title) like ?', "%#{search}%").limit(5)
    render "api/albums/index"
  end


  def album_params
    params.require(:album).permit(:artist_id,:title,:description,:photo)
  end
end
