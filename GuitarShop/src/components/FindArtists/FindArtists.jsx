import React, { useState, useEffect } from 'react';
import './FindArtists.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Col, Card } from 'react-bootstrap';

const CLIENT_ID = "ace2978f68694b28b79c1d273055bc5d"; // Spotify API keys from my personal account
const CLIENT_SECRET = "f8b2ad8e035f4e7e8150b5a85ffe0756";

const FindArtists = () => {
  //state hooks for search input, access token, artist data, and albums data
  // as default value I will put The Beatles
  const [searchInput, setSearchInput] = useState("The Beatles"); 
  const [accessToken, setAccessToken] = useState("");
  const [artist, setArtist] = useState(null); 
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    };

    fetch('https://accounts.spotify.com/api/token', authParameters) 
      .then(result => result.json())
      .then(data => {
        setAccessToken(data.access_token);
      })
      .catch(error => {
        console.error('Error fetching access token:', error);
      });
  }, []);

  useEffect(() => {
    if (!accessToken) return;

    const artistParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    };

    fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`, artistParameters)
      .then(response => response.json())
      .then(data => {
        if (data.artists.items.length > 0) {
          const artistInfo = data.artists.items[0];
          setArtist({
            name: artistInfo.name,
            image: artistInfo.images[0]?.url,
            popularity: artistInfo.popularity,
            genres: artistInfo.genres,
            originCountry: artistInfo.external_urls && artistInfo.external_urls.spotify ? artistInfo.external_urls.spotify.split('/')[3] : '',
            spotifyUrl: artistInfo.external_urls ? artistInfo.external_urls.spotify : ''
          });
          return artistInfo.id;
        } else {
          throw new Error('No artist found');
        }
      })
      .then(artistID => {
        return fetch(`https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=US&limit=50`, artistParameters)
          .then(response => response.json())
          .then(data => data.items.map(item => ({
            id: item.id,
            name: item.name,
            image: item.images[0]?.url,
            artist: item.artists.map(artist => artist.name).join(', '),
            releaseYear: item.release_date.slice(0, 4)
          })));
      })
      .then(albums => {
        setAlbums(albums);
      })
      .catch(error => {
        console.error('Error fetching artist data:', error);
        setAlbums([]);
      });
  }, [accessToken, searchInput]);

  useEffect(() => {
    setSearchInput("The Beatles");
  }, []);

  const handleSearch = () => {
    if (!accessToken) return;
  };

  return (
    <div className='find-artists'>
      <h1 className='caption_artists'>Let's Find Your Favourite Artist!</h1>
      <p className='caption_artists' style={{ fontSize: '1.4em' }}><p>Just type any artist into Search</p></p>
      <Container>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder='Search for Artist'
            type='text'
            value={searchInput}
            onChange={event => setSearchInput(event.target.value)}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <Button variant='primary' onClick={handleSearch}>
            Search
          </Button>
        </InputGroup>
      </Container>

      {artist && (
        <Container className='artist-info'>
          <Row className='mb-3'>
            <Col xs={4} className='text-center'>
              <img src={artist.image} alt={artist.name} className='artist-image'/>
            </Col>
            <Col xs={8}>
              <h2>{artist.name}</h2>
              <p><b>Popularity:</b> {artist.popularity}</p>
              <p><b>Genres:</b> {artist.genres.join(', ')}</p>
              <p><b><a href={artist.spotifyUrl} target='_blank' rel='noopener noreferrer'><u>View on Spotify</u></a></b></p>
            </Col>
          </Row>
        </Container>
      )}

      <Container>
        <Row xs={1} md={2} lg={4} className='g-4'>
          {albums.map((album, index) => (
            <Col key={index}>
              <Card>
                <Card.Img variant='top' src={album.image} alt={album.name} />
                <Card.Body>
                  <Card.Title>{album.name}</Card.Title>
                  <Card.Text>By {album.artist}</Card.Text>
                  <Card.Text>Released: {album.releaseYear}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FindArtists;
