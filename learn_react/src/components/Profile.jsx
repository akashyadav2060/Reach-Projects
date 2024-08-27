function Profile(){
    const url= "https://i.imgur.com/MK3eW3As.jpg";
    const name="Akash_Yadav"
    return(
        <div>
        <img className="rounded-full" src={url} alt={name} />

    </div>
    )
}
export default Profile;