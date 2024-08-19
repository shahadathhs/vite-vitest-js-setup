import { useUsers } from './../hooks/useUsers';

export default function AddUsers() {
  const { users, setUsers } = useUsers();

  const addUser = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    setUsers((prevUsers) => [...prevUsers, data]);
    console.log(data);
    e.target.reset();
  }
  
  return (
    <div>
      <h1>Add Users</h1>
      <br />
      <br />

      <h2>Add Users Form</h2>

      <br />
      <p>Total users: {users.length}</p>
      <br />

      <form onSubmit={addUser}>
        <label>First Name</label>
        <input type="text" name="first_name" className='input input-bordered' required />
        <br />
        <br />
        <label>Last Name</label>
        <input type="text" name="last_name"  className='input input-bordered' required/>
        <br />
        <br />
        <label>Email</label>
        <input type="email" name="email"  className='input input-bordered' required/>
        <br />
        <br />
        <label>Phone</label>
        <input type="tel" name="phone"  className='input input-bordered' required/>
        <br />
        <br />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
