import React, { useCallback } from 'react';
import {
  FooterWrapper,
  Container,
  FooterTop,
  FooterMiddle,
  FooterBottom,
  BackToTop,
  FooterColumn,
  FooterLogo,
  SocialNetworks,
  FooterColumnTitle,
  FooterList,
  FooterListItem,
  FooterLink,
  FooterStoresWrapper,
  FooterStoresWrapperImage,
  FooterColumnWrapper,
  FooterBottomColumn,
  FooterDrinkWithModerationWrapper,
} from './styles';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = useCallback(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <FooterWrapper>
      <FooterTop>
        <BackToTop data-testid="backToTop" onClick={scrollToTop}>
          Voltar ao topo
        </BackToTop>
      </FooterTop>
      <Container>
        <FooterMiddle>
          <FooterColumn>
            <FooterLogo src="https://courier-images-web.imgix.net/static/img/logo-white-text.png?auto=compress,format&fit=max&w=176&h=56&dpr=2&fm=png" />
            <SocialNetworks>
              <a
                href="https://twitter.com/ZeDelivery"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineTwitter size="30" />
              </a>
              <a
                href="https://www.facebook.com/zedeliverydebebidas"
                target="_blank"
                rel="noreferrer noopener"
              >
                <RiFacebookCircleFill size="30" />
              </a>
              <a
                href="hhttps://www.instagram.com/zedelivery/?hl=pt"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagram size="30" />
              </a>
            </SocialNetworks>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnWrapper>
              <FooterColumnTitle>Sobre o Zé Delivery</FooterColumnTitle>
              <FooterList>
                <FooterListItem>
                  <FooterLink href="https://zedelivery.freshdesk.com/support/home">
                    Me ajuda, Zé!
                  </FooterLink>
                </FooterListItem>
                <FooterListItem>
                  <FooterLink href="https://zedelivery.gupy.io/">
                    Trabalhe conosco
                  </FooterLink>
                </FooterListItem>
                <FooterListItem>
                  <FooterLink href="https://zedelivery.freshdesk.com/support/solutions/articles/60000601483-posso-fazer-meu-pagamento-online-no-app-">
                    Pagamento na Entrega
                  </FooterLink>
                </FooterListItem>
                <FooterListItem>
                  <FooterLink href="https://www.ze.delivery/cidades-atendidas">
                    Cidades atendidas
                  </FooterLink>
                </FooterListItem>
              </FooterList>
            </FooterColumnWrapper>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnWrapper>
              <FooterColumnTitle>Parcerias</FooterColumnTitle>
              <FooterLink href="https://www.ze.delivery/cadastro-parceiro">
                Quero ser parceiro
              </FooterLink>
            </FooterColumnWrapper>
          </FooterColumn>
          <FooterColumn>
            <FooterStoresWrapper>
              <FooterColumnTitle>Já baixou o aplicativo?</FooterColumnTitle>
              <a href="https://go.onelink.me/app/dae6576">
                <FooterStoresWrapperImage
                  src="https://courier-images-web.imgix.net/static/img/play_store_badge.png?auto=compress,format&fit=max&w=136&h=40&dpr=2&fm=png"
                  alt="ze-delivery-play-store"
                />
              </a>
              <a href="https://go.onelink.me/app/dae6576">
                <FooterStoresWrapperImage
                  src="https://courier-images-web.imgix.net/static/img/apple_store_badge.png?auto=compress,format&fit=max&w=136&h=40&dpr=2&fm=png"
                  alt="ze-delivery-apple-store"
                />
              </a>
            </FooterStoresWrapper>
          </FooterColumn>
        </FooterMiddle>
        <FooterBottom>
          <FooterBottomColumn>
            <FooterLink style={{ marginRight: '10px' }} href="#">
              Termos de uso
            </FooterLink>
            <FooterLink href="#">Política de privacidade</FooterLink>
          </FooterBottomColumn>
          <FooterBottomColumn>
            ©2020 Zé Delivery - Todos os direitos reservados.
          </FooterBottomColumn>
          <FooterBottomColumn style={{ fontWeight: 'bold' }}>
            <FooterDrinkWithModerationWrapper>
              BEBA COM MODERAÇÃO
            </FooterDrinkWithModerationWrapper>
          </FooterBottomColumn>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
