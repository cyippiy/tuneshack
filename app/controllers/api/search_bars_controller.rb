class Api::SearchBarsController < ApplicationController
    
    def search
        hash = {}
        users.each do |user|
            hash[user.id] = UserSerializer.new(user)
        end

        albums.each do |album|
            hash[album.id] = AlbumSerializer.new(album)
        end 

        songs.each do |song|
            hash[song.id] = SongSerializer.new(song)
        end 
        
        render json: hash
    end

    private

    def users
        search = params[:search].downcase
        return users = User.where('lower(band_name) like ?', "%#{search}%").limit(5)
    end

    def albums
        search = params[:search].downcase
        return albums = Album.where('lower(title) like ?', "%#{search}%").limit(5)
    end

    def songs
        search = params[:search].downcase
        return songs = Song.where('lower(title) like ?', "%#{search}%").limit(5)
    end

end
