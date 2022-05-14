import React from "react";

const TopBar = () => {
  return (
    <section className='topbar bg-light py-2'>
      <article className='container d-flex justify-content-between'>
        <div>Phone: 062 123 456 | Email: info@webshop.com </div>
        <div>
          <a href=''>Gift cards</a> | <a href=''>Contact</a>
        </div>
      </article>
    </section>
  );
};

export default TopBar;
