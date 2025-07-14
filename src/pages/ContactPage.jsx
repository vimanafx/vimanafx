import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Contact VimanaFX');
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`);
    window.location.href = `mailto:vimanafx@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh">
      <h1>Contact VimanaFX</h1>
      <p>Reach out to us for support &amp; help!</p>
      {submitted ? (
        <p>Thank you for contacting us. We'll get back to you soon!</p>
      ) : (
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ maxWidth: 400, width: "100%" }}
          >
            <TextField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              InputProps={{
                sx: {
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#4B3F72',
                  },
                  '& .MuiOutlinedInput-root.Mui-focused': {
                    color: '#4B3F72',
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  '&.Mui-focused': {
                    color: '#4B3F72',
                  },
                },
              }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              InputProps={{
                sx: {
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#4B3F72',
                  },
                  '& .MuiOutlinedInput-root.Mui-focused': {
                    color: '#4B3F72',
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  '&.Mui-focused': {
                    color: '#4B3F72',
                  },
                },
              }}
            />
            <TextField
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              multiline
              rows={5}
              InputProps={{
                sx: {
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#4B3F72',
                  },
                  '& .MuiOutlinedInput-root.Mui-focused': {
                    color: '#4B3F72',
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  '&.Mui-focused': {
                    color: '#4B3F72',
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, backgroundColor: '#4B3F72', '&:hover': { backgroundColor: '#3a315a' } }}
            >
              Send
            </Button>
          </Box>
      )}
    </Box>
  );
};

export default ContactPage;
