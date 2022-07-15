import React,{ useState, useEffect } from 'react';




function Game() {
    const [userChoice,setuserChoice]=useState('Rock');
    const [computerChoice,setcomputerChoice]=useState('Rock');
    const[userpoints,setuserpoints]=useState(0);
    const[computerpoints,setcomputerpoints]=useState(0);
    const[turnresult,setturnresult]=useState(null);
    const [result,setresult]=useState("Let's see who wins");
    const [gameover,setgameover]=useState(false);

    const Choices= ['Rock','Paper','Scissors'];
    const handelclick = (Choice)=>{
        setuserChoice(Choice)
        generatecomputerChoice()
    }
    const generatecomputerChoice = () =>{
        const randomChoice = Choices[Math.floor(Math.random() *Choices.length)]
        setcomputerChoice(randomChoice)
    }
    const reset= () => {
        window.location.reload()
    }
    useEffect(() => {
        const comboMoves = userChoice + computerChoice
        if(userpoints <= 4 && computerpoints <= 4){
            if(comboMoves === 'RockScissors' || comboMoves === 'PaperRock' || comboMoves==='ScissorsPaper'){
            const updatesuserpoints = userpoints + 1
            setuserpoints(updatesuserpoints)
            setturnresult('User got the point')
            if(updatesuserpoints === 5){
                setgameover(true)
                setresult('User wins')
            }}
        
        
        if(comboMoves === 'PaperScissors' || comboMoves === 'ScissorsRock' || comboMoves === 'RockPaper'){
        const updatedcomputerpoints = computerpoints + 1 
        setcomputerpoints(updatedcomputerpoints)
        setturnresult('Computer get the point')
        if(updatedcomputerpoints === 5){
            setgameover(true)
            setresult('Computer Wins')
        }}
        
        if (comboMoves === 'RockRock' || comboMoves === 'PaperPaper' || comboMoves ===''){
        setturnresult('No one get the point')}
    }},[userChoice, computerChoice])


  return (
    <div>
        <h1 className='Heading'>Rock-Paper-Scissors</h1>
        <h3 className='Headingdown'>The First Who Scors 5 First Wins</h3>
        <div className='scors'>
        <h1>User Points: {userpoints}</h1>
        <h1>Computer Points: {computerpoints}</h1>
        </div>
        <div className='choice'>
        <div className='choiceuser'>
            <img className='user-hand' src={`../Pictures/${userChoice}.png`}/>
        </div>
        <div className='choiceuser'>
            <img className='computer-hand' src={`../Pictures/${computerChoice}.png`}/>
        </div>
        </div>
        <div className='btn-div'>
            {Choices.map((Choice, index)=>
            <button className='btn' key={index} onClick={()=> handelclick(Choice)}>{Choice}</button>
            )}
        </div>
        <div className='Result'>
            <h1>Turn Result:{turnresult}</h1><br></br>
            <h1>Final Result:{result}</h1>
        </div>
        <div className='btn-div'>
            {gameover &&
            <button className='btn-res' onClick={()=> reset()}>Restart Game?</button>}
        </div>
    </div>
  )
}

export default Game;