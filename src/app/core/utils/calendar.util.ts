import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DateFormatterParams } from 'angular-calendar';

@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

	parse(value: string): NgbDateStruct | null {
		if (value) {
			let date = value.split("-");
			return {
				day: parseInt(date[0], 10),
				month: parseInt(date[1], 10),
				year: parseInt(date[2], 10)
			};
		}
		return null;
	}

	format(date: NgbDateStruct | null): string {
		return date ? [("0" + date.day).slice(-2), ("0" + date.month).slice(-2), date.year].join('-') : '';
	}

	public dayViewHour({ date, locale }: DateFormatterParams): string {
	    return formatDate(date, 'HH:mm', locale!);
	}

	public weekViewHour({ date, locale }: DateFormatterParams): string {
		return this.dayViewHour({ date, locale });
	}

	public monthViewTitle({ date, locale }: DateFormatterParams): string {
		return formatDate(date, 'MMMM YYYY', locale!);
	}

	public weekViewTitle ({ date, locale }: DateFormatterParams): string {
		let dia: string = formatDate(date, 'c', locale!);
		let nDia: number = dia === '0' ? 7 : (+dia);
		let dIni: Date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
		let dFin: Date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
		
		dIni.setDate(dIni.getDate() - (nDia - 1));
		dFin.setDate(dFin.getDate() + (7 - nDia));
		
		return formatDate(dIni, 'MMMM dd', locale!) + ' - ' + formatDate(dFin, 'MMMM dd, YYYY', locale!);
	}

	public monthViewDayNumber({ date, locale }: DateFormatterParams): string {
		return formatDate(date, 'd', locale!);
	}

	public monthViewColumnHeader({ date, locale }: DateFormatterParams): string {
		return formatDate(date, 'EEE', locale!);
	}

	public weekViewColumnHeader ({ date, locale }: DateFormatterParams): string {
		return formatDate(date, 'EEE', locale!);
	}

	public weekViewColumnSubHeader ({ date, locale }: DateFormatterParams): string {
		return formatDate(date, 'MMM dd', locale!);
	}
}

