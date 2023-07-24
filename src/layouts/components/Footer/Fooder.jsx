import React from "react";
import styled from "styled-components";
import { Images } from "../../../assets";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import "./styles.scss";

const LayoutFooter = styled.div`
	font-family: BrandonLight;
	.heading-footer {
		position: relative;
		font-family: BrandonText;
		&:after {
			position: absolute;
			content: "";
			width: 50px;
			height: 2px;
			bottom: 0;
			left: 0;
			background-color: #000;
		}
		.des_footer {
			font-family: BrandonLight;
			
		}
	}
`;
function Footer() {
	return (
		<footer>
			<div className="footer-top py-[45px]">
				<div className="container">
					<LayoutFooter className="flex gap-[18px]">
						<div className="item-footer w-[25%]">
							<div className="heading-footer pb-[10px] mb-[13px]">
								<h4 className="font-bold text-[18px] ">heyyoustudiovn</h4>
							</div>
							<p>𝗛𝗘𝗬𝗬𝗢𝗨!® - POPULAR BRAND</p>
							<div className="des_footer py-[10px]">
								<div className="top_des flex items-center gap-[3px]">
									<Image ClassName="w-[16px] h-[16px]" src={Images.VisitFooter} />{" "}
									<span> Hệ thống cửa hàng</span>
								</div>

								<div className="location_des text-[14px] font-[100px]">
									<ul>
										Hồ Chí Minh:
										<li>- Bình Thạnh: 115-117 đường Võ Oanh, phường 25</li>
										<li>- Thủ Đức: 57 đường số 10, khu phố 4, phường Tam Bình</li>
										<li>- Phú Nhuận: 182/13A Lê Văn Sỹ, Phường 10</li>
									</ul>
									<ul>
										TP Cần Thơ:
										<li>- Ninh Kiều: 110/5/2 hẻm 5 đường Nguyễn Việt Hồng, Phường An Phú</li>
									</ul>
								</div>
								<div className="contact_des text-[14px] items-center flex gap-[3px] mt-[10px]">
									<Image ClassName="w-[18px] h-[18px]" src={Images.ContactDes} />
									<span>1900866632</span>
								</div>
								<div className="contact_des text-[14px] items-center flex gap-[3px] mt-[10px]">
									<Image ClassName="w-[22px] h-[18px]" src={Images.Temp} />
									<span>heyyoustudiovn@gmail.com</span>
								</div>
							</div>
						</div>

						<div className="item-footer w-[25%]">
							<div className="heading-footer pb-[10px] mb-[13px]">
								<h4 className="font-bold text-[18px] ">Liên kết</h4>
							</div>
							<div className="des_footer py-[10px]">
								<div className="location_des text-[14px] font-[100px]">
									<ul className="flex flex-col gap-y-[12px]">
										<li>Tìm kiếm</li>
										<li>Giới thiệu</li>
										<li>Chính sách đổi trả</li>
										<li>Điều khoản dịch vụ</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="item-footer w-[25%]">
							<div className="heading-footer pb-[10px] mb-[13px]">
								<h4 className="font-bold text-[18px] ">Fanpage</h4>
							</div>
						</div>
						<div className="item-footer w-[25%]">
							<div className="heading-footer pb-[10px] mb-[13px]">
								<h4 className="font-bold text-[18px] ">Đăng ký nhận khuyến mãi</h4>
							</div>
							<p>Hãy là người đầu tiên nhận khuyến mãi lớn!</p>
							<div className="register_footer mt-[10px]">
								<input className="flex-1 pl-[5px]" type="text" placeholder="Email" />
								<Button primary bold>
									Đăng Ký
								</Button>
							</div>
						</div>
					</LayoutFooter>
				</div>
			</div>
			{/* footer bottom */}
			<div className="footer-bottom py-[15px] ">
				<div className="container flex justify-between ">
					<p>© Copyright 2022 By heyyoustudiovn. Powered by Haravan</p>
					<Image src={Images.PayCart} />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
