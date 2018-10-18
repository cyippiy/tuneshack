json.extract! @song, :id, :album_id, :title, :track_number
json.songUrl url_for(@song.track)
