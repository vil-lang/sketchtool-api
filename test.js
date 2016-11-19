import test from 'ava'
import sketchtool from './'

test.beforeEach(t => {
  sketchtool.path = 'fixtures/sketchtool'
})

test('get sketchool path', t => {
  t.is(sketchtool.path, 'fixtures/sketchtool')
})

test('detect that sketchtool is installed', t => {
  t.is(sketchtool.installed, true)
})

test('detect that sketchtool is not installed', t => {
  sketchtool.path = '/dev/null'
  t.is(sketchtool.installed, false)
})

test('get version', async t => {
  t.is(typeof await sketchtool.version(), 'number')
})

test('dump a document', async t => {
  const doc = await sketchtool.dump('fixtures/empty.sketch')
  t.is(typeof doc, 'object')
  t.truthy(doc.assets)
  t.truthy(doc.pages)
})

test('explode if document does not exist', t => {
  t.throws(sketchtool.dump('void'))
})
