import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card border border-dark shadow-0 p-3 m-3">
        <div
          className="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <Image
            src="/myBlogImg.jpg"
            alt="Picture of the author"
            className="img-fluid"
            width={450}
            height={500}
          />
        </div>

        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <Link href={`/post/${post.id}`}>
            <a>
              <button type="button" className="btn btn-outline-dark">
                Read more
              </button>
            </a>
          </Link>
        </div>

      </div>
    </div>
  );
}
