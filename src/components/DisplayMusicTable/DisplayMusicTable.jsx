import React from 'react';


const DisplayMusicTable = (props) => {
    return ( 
        <React.Fragment>
        <form> 
        <div>
            <table className="table table-bordered border-primary">
                <tr>
                    <th className="table-primary">Title</th>
                    <th className="table-primary">Album</th>
                    <th className="table-primary">Artist</th>
                    <th className="table-primary">Release Date</th>
                    <th className="table-primary"> Delete</th>
                </tr>
                    {props.showMusic.map(showMusic => (
                        <tr key={showMusic.id}>
                            
                            <td className="table-primary">{showMusic.title}</td>
                            <td className="table-primary">{showMusic.album}</td>
                            <td className="table-primary">{showMusic.artist}</td>
                            <td className="table-primary">{showMusic.release_date}</td>
                            
                            <button className="btn btn-primary text-yellow" onClick={() => props.deleteRow(showMusic.id)}> DELETE  </button>
                            
                            
                        </tr>
                        
                        ))}
            </table>
        


        
         </div>


        
        </form>
        </React.Fragment>
     );
}
 
export default DisplayMusicTable;