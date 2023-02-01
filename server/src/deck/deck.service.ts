import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeckServiceBase } from "./base/deck.service.base";

@Injectable()
export class DeckService extends DeckServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
