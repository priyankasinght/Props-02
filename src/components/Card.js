const Card = (props) => {

    const style = {
        backgroundImage: `linear-gradient(to right, #0D0D0C,#0D0D0C,rgba(0, 0, 0, 0)) , url(${props.backgroundImageSrc})`,
        backgroundSize: '100% 100%',
        boxShadow: `10px 10px 40px ${props.backgroundShadow}, -10px -10px 40px ${props.backgroundShadow}`
    }

    return (
        <div style={style} className='movieCard'>
            <div className='movieInfo'>
                <div>
                    <img alt='posterimg' className="poster" src={props.posterSrc}></img>
                </div>
                <div className='rightdiv'>
                    <h1 className='white title'>{props.title}</h1>
                    <h3 className='movierelease'>{props.releaseYear}, {props.directedBy}</h3>
                    <div className='shortInfo'>
                        <h4 className='white duration'>{props.duration}</h4>
                        <h4 className='gray genre'>{props.genre}</h4>
                    </div>
                </div>
            </div>
            <div className='details'>
                <h4 className='gray'>
                    {props.description}
                </h4>
            </div>
            <div className='icons'>
                <img alt='share' src={props.icon[0]}></img>
                <img alt='like' src={props.icon[1]}></img>
                <img alt='comment' src={props.icon[2]}></img>
            </div>
        </div>
    )
};

export default Card;