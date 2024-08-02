import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Form.scss";

const Form = () => {
  if (!localStorage.getItem("news"))
    localStorage.setItem("news", JSON.stringify([]));

  const initialValue = {
    title: "",
    body: "",
    thumbnail: undefined,
  };
  const [formData, setFormData] = useState(initialValue);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.title.length < 8) {
      return setMessage("Title must be 8 or more characters longer");
    }

    const news = JSON.parse(localStorage.getItem("news"));
    news.push(formData);
    localStorage.setItem("news", JSON.stringify(news));

    clearState();
    navigate("/list");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const clearState = () => {
    setFormData({ ...initialValue });
    setMessage("");
  };

  return (
    <section className="container">
      <div className="form">
        <h1 className="form__title">Upload news</h1>
        <p className="form__error">{message}</p>

        <form onSubmit={handleSubmit} className="form__form">
          <div className="form__field">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="form__field">
            <textarea
              className="form__textarea"
              name="body"
              id="body"
              rows={6}
              value={formData.body}
              onChange={handleChange}
            />
          </div>

          {/* <div className="form__field">
            <input
              className="form__file-input"
              type="file"
              id="thumbnail"
              name="thumbnail"
              accept="image/png, image/jpeg"
            />
          </div> */}

          <button type="submit" className="form__button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
