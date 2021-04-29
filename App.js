import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <table>
          <tr>
    <td> <label for="exampleInputEmail1" class="form-label">Email address</label> </td>
     <td> <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input></td>
      </tr>
      <tr>
     <td> <label for="exampleInputPassword1" class="form-label">Password</label> </td>
     <td> <input type="password" class="form-control" id="exampleInputPassword1"></input> </td>
      </tr>
      <tr>
      <td><input type="checkbox" class="form-check-input" id="exampleCheck1"></input> </td>
      <td><label class="form-check-label" for="exampleCheck1">Check me out</label></td>
      </tr>
      <tr><button type="submit" class="btn btn-primary">Submit</button> </tr>
      </table>
      </form>
 
</div>
    
  );
}

export default App;
