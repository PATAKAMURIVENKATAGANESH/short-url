

import { getRepository } from 'typeorm';
import { User } from './user.entity';

export const UserController = {
  getUsers: async (req, res) => {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    res.json(users);
  },

  getUserById: async (req, res) => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(req.params.id);
    res.json(user);
  },

  createUser: async (req, res) => {
    const userRepository = getRepository(User);
    const newUser = userRepository.create(req.body);
    const result = await userRepository.save(newUser);
    res.json(result);
  },
};
