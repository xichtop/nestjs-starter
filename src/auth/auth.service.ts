import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getAuth(): string {
    return 'This action returns all cats fuck u';
  }
}
