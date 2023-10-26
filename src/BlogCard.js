const BlogCard=(props)=>{
    return(
        <>
        <div class="card rounded-2 mb-5 ">
  <img src={props.blogimg} class="card-img-top" alt="..." className="img-fluid"/>
  <div class="card-body">
    <h5 class="card-title h2">{props.blogtitle}</h5>
    <p class="card-text">Scelerisque purus semper eget duis at. Tincidunt ornare massa eget egestas purus viverra. Morbi enim nunc faucibus a pellentesque. Lobortis elementum nibh tellus molestie nunc non...</p>
    <p className="lead text-warning fw-bold">Read More<i class="bi bi-arrow-right fw-bold "></i></p>
  </div>
</div></>
    )
}
export default BlogCard;