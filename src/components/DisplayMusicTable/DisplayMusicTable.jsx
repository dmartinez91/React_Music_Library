import React from 'react';
import './DisplayMusicTable.css';

const DisplayMusicTable = (props) => {
    return ( 
        <React.Fragment>
        
        <div>
            <table className="table">
                <tr>
                    <th className="th"> Delete </th>
                    <th className="th">Title</th>
                    <th className="th">Album</th>
                    <th className="th">Artist</th>
                    <th className="th">Release Date</th>
                </tr>
                    {props.showMusic.map(showMusic => (
                        <tr key={showMusic.id}>
                            
                            <td className="td">{showMusic.title}</td>
                            <td className="td">{showMusic.album}</td>
                            <td className="td">{showMusic.artist}</td>
                            <td className="td">{showMusic.release_date}</td>
                            
                            <button onClick={() => props.deleteRow(showMusic.id)}> DELETE  </button>
                            
                        </tr>
                        ))}
            </table>
        </div>
        </React.Fragment>
     );
}
 
export default DisplayMusicTable;