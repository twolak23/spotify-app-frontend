import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import PlaylistsSearchResult from "./PlaylistsSearchResult";
import { ApiError, get } from "@aws-amplify/api";

const InlineForm = styled(Form)`

  .form-label .form-control {
    display: inline,
  }
  * {
    margin: 0.1em
  }

`

const PlaylistsSearchForm = () => {

  const [searchCategory, setSearchCategory] = useState("");
  const [searchTextVisible, setSearchTextVisible] = useState(false);
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setSearchTextVisible(searchCategory !== "");
  }, [searchCategory])
  
  const handleSearch = (e) => {
    e.preventDefault()
    const body = {
      query: query,
      stage: "test"
    }
    const searchOperation = get({
      apiName: 'SpotifyAPI',
      path: `/playlists?query=${query}&offset=0&limit=10`,
      options: {
        headers: {
          'Access-Control-Allow-Origin': window.location.origin
        },
        body: body,
        withCredentials: true // Include cookies in the request
      }
    });
    searchOperation.response
      .then((res) => {
        console.log('GET Call Succeeded:');
        return res.body.json().then((data) => {
          console.log('items:', data);
          setResult(data);
          return data;
        });
      })
      .catch((error) => {
        if (error instanceof ApiError) {
          if (error.response) {
            const {
              statusCode,
              body
            } = error.response;
            console.error(`Received ${statusCode} error response with payload: ${body}`);
            console.log('GET Call Failed:');
            alert(`Search failed: ${body}`);
            return error;
          }
        }
      });
  }

  return (<div>
    <InlineForm>
      <Form.Select aria-label="Search for..." value={searchCategory} onChange={e => setSearchCategory(e.target.value)}>
        <option></option>
        <option value="playlist">playlists</option>
      </Form.Select>
      {searchTextVisible &&
        <Form.Group className="mb-3" controlId="formGroupsSearchText">
          <Form.Control size="lg" type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Type to search.." />
          <button type="submit" onClick={e => handleSearch(e)}>Search</button>
        </Form.Group>
      }
    </InlineForm>
    {result && <PlaylistsSearchResult items={result}/>}
  </div>
  );
}

export default PlaylistsSearchForm;