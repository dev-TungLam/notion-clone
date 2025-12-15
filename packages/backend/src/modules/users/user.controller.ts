import { Controller, Get, Param, Request } from '@nestjs/common';
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('/:userId')
    async getProfile(@Param() param: any) {
        const {...userInfo} = await this.userService.findById(param.userId);
        delete userInfo.password_hash;
        return userInfo;
    }
}