import React from 'react';

const Frase = (props) => {
    return (
        <div>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4 pl-2">
                        <img src={props.fraseSimpsons.image} className="card-img" alt={props.fraseSimpsons.character}></img>
                    </div>
                    <div className="col-md-8 my-auto">
                        <div className="card-body">
                            <h5 className="card-title">{props.fraseSimpsons.character}</h5>
                            <p className="card-text">{props.fraseSimpsons.quote}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frase;   