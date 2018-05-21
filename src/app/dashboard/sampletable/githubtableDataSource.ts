import { CollectionViewer, DataSource } from '@angular/cdk/collections'

import { Observable } from 'rxjs/Observable'

import { GithubApi , GithubIssue } from '../../appModels/githubModels'

export class gitHubDataSource extends DataSource<GithubApi> {
  public constructor(private issues: Observable<GithubApi[]>) {
    super()
  }

  public connect(collectionViewer: CollectionViewer): Observable<GithubApi[]> {
    return this.issues;
  }

  public disconnect(collectionViewer: CollectionViewer): void {
  }
}