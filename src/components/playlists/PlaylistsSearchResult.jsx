const PlaylistsSearchResult = ({items}) => {
    return ( <div>
        {items.map(el => (<div key={el.id}>
            <span><a href={el.spotify_url}>{el.name}</a></span>
            <p>{el.description}</p>
        </div> ))}
    </div> );
}
 
export default PlaylistsSearchResult;