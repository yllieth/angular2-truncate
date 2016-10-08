import { Injectable, PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'truncate',
  pure: true
})
@Injectable()
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number, trail: string) : string {
    limit = limit || 10;
    trail = trail || '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
