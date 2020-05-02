import { createAction, props } from '@ngrx/store'
import { ITrailPreview } from 'src/app/modules/trails/interfaces/trail-preview.interface'

export const loadTrailPreviews = createAction('[TRAILS] Loading trail previews...')
export const loadTrailPreviewsEnd = createAction('[TRAILS] Loading trail previews [END]', props<{ trailPreviews: ITrailPreview[] }>())
