import TikTokScraper, { Result } from 'tiktok-scraper'
import { Hono } from 'hono'
import { options } from './options'
const app = new Hono()

app.get('/', (c) => c.text('Hono!!'))

app.fire()

const scraperOptions = options

/**
 * Get all posts for a specific user id
 */
app.get('/user/:id', async (c) => {
  const id = c.req.param('id')
  const posts = await TikTokScraper.user(id, scraperOptions) //Scrape posts from a specific user (Promise)
  TikTokScraper
  if (posts.json) return c.text(posts.json)
  c.status(400)
  return c.text('error')
})

/**
 * Get all posts from a hashtag
 */
// .hashtag(id, options) //Scrape posts from hashtag section (Promise)

/**
 * // Get hashtag information
 */
// .getHashtagInfo('HASHTAG', options) // Get hashtag information
/**
 * Get all posts from a trends section
 */
app.get('/trend', async (c) => {
  return c.text('')
})
// .trend('', options) // Scrape posts from a trends section (Promise)
/**
 * Scrape songs by music id
 * @params id music id to look for songs
 * @params options
 */
// .music(id, options) // Scrape posts by music id (Promise)
/**
 * Scrape all posts for a specific user id
 * @params id user id
 * @params options
 */
//.getUserProfileInfo('USERNAME', options) // Get user profile information
/**
 * Get signature for the request
 **/
// .signUrl('URL', options)
// .getVideoMeta('WEB_VIDEO_URL', options) // Get video meta info, including video url without the watermark

/**
 * Get music metadata
 **/
app.get('/musicMetaData', async (c) => {
  const result = await TikTokScraper.getMusicInfo(
    'https://www.tiktok.com/music/original-sound-6801885499343571718',
    options,
  )
  return c.json(result)
})

app.get('/user/:id', async (c) => {
  const id = c.req.param('id')
  const posts = await TikTokScraper.user(id, scraperOptions) //Scrape posts from a specific user (Promise)

  return c.text('Hono!!')
})
/*

 TODO find out about events...
.userEvent(id, options) //Scrape posts from a specific user (Event)
.hashtagEvent(id, options) //Scrape posts from hashtag section (Event)
.trendEvent('', options) // Scrape posts from a trends section (Event)
.musicEvent(id, options) // Scrape posts by music id (Event)
 * 
 */
