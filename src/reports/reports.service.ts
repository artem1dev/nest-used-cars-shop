import { Injectable, NotFoundException } from "@nestjs/common";
import { Report } from "./report.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateReportDto } from "./dtos/create-report.dto";
import { User } from "../users/user.entity";
import { GetEstimateDto } from "./dtos/get-estimate.dto";

@Injectable()
export class ReportsService {
    constructor(
        @InjectRepository(Report)
        private readonly reportRepository: Repository<Report>,
    ) {}

    createEstimate({ make, model, lng, lat, year, milage }: GetEstimateDto) {
        return this.reportRepository
            .createQueryBuilder()
            .select("AVG(price)", "price")
            .where("make = :make", { make })
            .andWhere("model = :model", { model })
            .andWhere("lng = :lng BETWEEN -5 AND 5", { lng })
            .andWhere("lat = :lat BETWEEN -5 AND 5", { lat })
            .andWhere("year = :year BETWEEN -3 AND 3", { year })
            .orderBy("ABS(milage - :milage)", "DESC")
            .setParameters({ milage })
            .limit(3)
            .getRawOne();
    }

    create(reportDto: CreateReportDto, user: User) {
        const report = this.reportRepository.create(reportDto);
        report.user = user;
        return this.reportRepository.save(report);
    }

    async changeApproval(id: string, approved: boolean) {
        const report = await this.reportRepository.findOne({
            where: { id: parseInt(id) },
            loadRelationIds: true,
        });
        if (!report) {
            throw new NotFoundException("report not found");
        }
        report.approved = approved;
        return this.reportRepository.save(report);
    }
}
