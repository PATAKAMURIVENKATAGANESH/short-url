import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ShortUrl } from '../short-url/short-url.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(() => ShortUrl, shortUrl => shortUrl.user)
  shortUrls: ShortUrl[];
}
