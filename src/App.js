import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions'

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App d-flex justify-content-center align-items-center flex-column">
      <div className="card col-2 d-flex justify-content-center align-items-center text-center rounded card-border card-background">
        <div className="card-body d-flex">
          <div>
            <i class="fa fa-rocket fa-2x" aria-hidden="true"></i>
          </div>
          <div>
            <h1 className="card-title white-text">Rad Redux</h1>
            <h2 className="white-text"> Counter {counter} </h2>
            <div>
              <button type="button" className="btn btn-primary button-length m-1" onClick={() => dispatch(increment())} >
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
              <button type="button" className="btn btn-primary button-length m-1" onClick={() => dispatch(decrement())} >
                <i className="fa fa-minus" aria-hidden="true"></i>
              </button>
              {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}
            </div>
          </div>
          <div>
            <i class="fa fa-rocket fa-2x" aria-hidden="true"></i>
          </div>
        </div>
        {/* <div>
          <button type="button" className="btn btn-primary button-length m-1" onClick={() => dispatch(increment())} >
            <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          <button type="button" className="btn btn-primary button-length m-1" onClick={() => dispatch(decrement())} >
          <i className="fa fa-minus" aria-hidden="true"></i>
          </button>
        {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}
      </div> */}
      </div>
    </div >
  );
}

export default App;
