import React from 'react';

const BlogItem = () => {
    return (
        <div className="col-lg-6">
        <article className="d-flex flex-column">

            <div className="post-img">
                <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid"/>
            </div>

            <h2 className="title">
                <a href="#">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam
                    quia</a>
            </h2>

            <div className="meta-top">
                <ul>
                    <li className="d-flex align-items-center"><i className="bi bi-person"/> <a
                        href="#">John Doe</a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-clock"/> <a
                        href="#">
                        <time dateTime="2022-01-01">Jan 1, 2022</time>
                    </a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-chat-dots"/> <a
                        href="#">12 Comments</a></li>
                </ul>
            </div>

            <div className="content">
                <p>
                    Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et
                    laboriosam eius aut nostrum quidem aliquid dicta.
                </p>
            </div>

            <div className="read-more mt-auto align-self-end">
                <a href="#">Read More <i className="bi bi-arrow-right"/></a>
            </div>

        </article>
    </div>
    );
};

export default BlogItem;
