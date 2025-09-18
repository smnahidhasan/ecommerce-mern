import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createUser } from '../services/userService';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateInput = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.includes('@')) return 'Invalid email format';
    if (formData.password.length < 6)
      return 'Password must be at least 6 characters long';
    if (formData.password !== formData.confirmPassword)
      return 'Passwords do not match';
    if (!formData.address.trim()) return 'Address is required';
    if (!formData.phone.trim() || formData.phone.length < 10)
      return 'Phone number is required and must be at least 10 characters';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setIsSubmitting(true);

    const validationError = validateInput();
    if (validationError) {
      setError(validationError);
      setIsSubmitting(false);
      return;
    }

    try {
      await createUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        address: formData.address,
        phone: formData.phone,
      });
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        phone: '',
      });
      navigate('/signin');
    } catch (err) {
      setError('Failed to create user. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Sign Up
          </Typography>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              User created successfully!
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            {[
              'name',
              'email',
              'password',
              'confirmPassword',
              'address',
              'phone',
            ].map((field, index) => (
              <motion.div
                key={field}
                custom={index}
                variants={fieldVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
              >
                <TextField
                  fullWidth
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  type={field.includes('password') ? 'password' : 'text'}
                  value={formData[field]}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 500 }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    Creating Account...
                  </motion.span>
                ) : (
                  'Sign Up'
                )}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Signup;
