class Api::SongsController < ApplicationController
  def create
    @song = Song.new(song_params)

    if @song.save
      render "api/songs/show"
    else
      render json: @song.errors.full_messages, status:422
    end
  end

  def index
    @songs = Song.where(album_id: params[:album_id]) unless params[:album_id].nil?
    @songs = Song.all if params[:album_id].nil?
  end

  def show
    @song = Song.find(params[:id])
    if @song
      render "api/songs/show"
    else
      render json: @song.errors.full_messages, status:422
    end
  end

  def song_params
    params.require(:song).permit(:artist_id,:title,:track_number,:track)
  end
end
