import { Injectable, PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'truncate',
  pure: true
})
@Injectable()
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number, trail: string, position: string): string {
    limit = limit || 10;
    trail = trail || '...';
    position = position || 'right';

    if (position === 'left') {
      return value.length > limit ? trail + value.substring(value.length - limit, value.length) : value;
    } else {
      return value.length > limit ? value.substring(0, limit) + trail : value;
    }
  }
}
