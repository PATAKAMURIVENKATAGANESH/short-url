
import { getRepository } from 'typeorm';
import { ShortUrl } from './short-url.entity';

export const ShortUrlController = {
  getShortUrls: async (req, res) => {
    const shortUrlRepository = getRepository(ShortUrl);
    const shortUrls = await shortUrlRepository.find();
    res.json(shortUrls);
  },

  getShortUrlById: async (req, res) => {
    const shortUrlRepository = getRepository(ShortUrl);
    const shortUrl = await shortUrlRepository.findOne(req.params.id);
    res.json(shortUrl);
  },

  createShortUrl: async (req, res) => {
    const shortUrlRepository = getRepository(ShortUrl);
    const newShortUrl = shortUrlRepository.create(req.body);
    const result = await shortUrlRepository.save(newShortUrl);
    res.json(result);
  },
};
