import React from "react";


const MovieDetails = () =>{



    return(
        <div>
            <div style={{display:'flex', justifyContent:'center' , flexDirection:'row', padding:50}}> 
                <img className='filmImage' src="https://static.posters.cz/image/750/plakaty/avengers-endgame-journey-s-end-i73600.jpg" style={{height:400}}></img>
                <div className="filmDetailsDiv" style={{display: 'flex', justifyContent: 'flex-start', alignItems:'flex-start', flexDirection:'column', paddingLeft:40}}> 
                    <h5>Title: Avengers Endgame</h5>
                    <h5>Year of production: 2019</h5>
                    <h5>Director: Frank Darabont</h5>
                    <h5>Genre: Sci-Fi</h5>
                    <h5>Storyline: </h5>
                    <spam style={{}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </spam>
                </div>
            </div>
        </div>

    );
}
export default MovieDetails;






