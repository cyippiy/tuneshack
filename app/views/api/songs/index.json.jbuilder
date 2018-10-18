json.songs @songs do |song|
  json.id song.id
  json.album_id song.album_id
  json.title song.title
  json.track_number song.track_number
  json.songUrl url_for(song.track)
end
