const Body = (props) => {

const { guy, setGuy } = props


  return (
    <div className="body">
      <h2>Please, fill the form bellow:</h2>
      {/* Name input */}
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" onChange={(e) => setGuy({...guy, name: e.target.value})}/>
        <br />
      </div>
      {/* Age input */}
      <div>
        <label htmlFor="age">Age: </label>
        <input type="number" id="age" onChange={(e) => setGuy({...guy, age: e.target.value})}/>
        <br />
      </div>
      {/* Gender input */}
      <div>
        <label htmlFor="gender">Gender:</label>
        <input type="radio" value="male" name="gender" id="male" onChange={(e) => setGuy({...guy, gender: e.target.value})}/>
        <label htmlFor="male">Male</label>
        <input type="radio" value="female" name="gender" id="female" onChange={(e) => setGuy({...guy, gender: e.target.value})}/>
        <label htmlFor="female">Female</label>
        <br />
      </div>
      {/* Skills input */}
      <div>
        <label htmlFor="skills">Skills: </label>
        <select name="text" id="skills" onChange={(e) => setGuy({...guy, skills: e.target.value})}>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JS</option>
        </select>
        <br />
      </div>
      {/* Nacionality input */}
      <div>
        <label htmlFor="nacionality">Is Brazilian?</label>
        <input type="radio" value={true} name="nacionality" id="yes" onChange={(e) => setGuy({...guy, isBrazilian: e.target.value})}/>
        <label htmlFor="yes">Yes</label>
        <input type="radio" value={false} name="nacionality" id="no" onChange={(e) => setGuy({...guy, isBrazilian: e.target.value})}/>
        <label htmlFor="no">No</label>
        <br />
      </div>
      {/* About Me input */}
      <div>
        <label htmlFor="text">About Me 🥳</label>
        <br />
        <textarea name="text" id="text" cols="30" rows="3" onChange={(e) => setGuy({...guy, aboutMe: e.target.value})}></textarea>
      </div>
        <div>
            <p>{guy.name} / {guy.age} / {guy.gender} / {guy.skills} / {guy.isBrazilian} /  {guy.aboutMe} </p>
        </div>
    </div>
  );
};

export default Body;
