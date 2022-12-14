import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Fablog">
    <Container>
      <Title>
        Fablog <Badge>2022</Badge>
      </Title>
      <P>
        Fablog es como su nombre indica, un blog tanto personal como educativo, me gusta subir 
        información o explicar conocimientos para tener una fuente demostrable.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://fablogg.vercel.app/">
            Web{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, Astro</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <UnorderedList my={4}>
       
      </UnorderedList>

      <SimpleGrid columns={2} gap={2}>
      </SimpleGrid>
      <WorkImage src="https://user-images.githubusercontent.com/55964635/207331250-87d6e6c9-3850-404a-968e-a89024e702f6.png" alt="walknote" />
      <WorkImage src="/images/works/fablog2.JPG" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
