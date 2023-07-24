import React from "react";
import styled from "styled-components";
import { Images } from "../../../assets";
import Image from "../../../components/Image";

const ContentFollow = styled.div`
	text-align: center;
	margin-top: 25px;
	& ~ .items_box-follow {
		& > .item-follow {
			overflow: hidden;
			& > img {
				transition: 0.7s all linear;
				cursor: pointer;
				&:hover {
					transform: scale(1.2);
				}
			}
		}
	}
	& > h3 {
		position: relative;
		font-size: 24px;
		margin: 0 10px;
		font-weight: bold;
		&:before {
			position: absolute;
			content: "";
			width: 40px;
			height: 2px;
			background-color: #000;
			top: 50%;
			left: 40%;
			transform: translate(-50%, -50%);
		}
		&:after {
			position: absolute;
			content: "";
			width: 40px;
			height: 2px;
			background-color: #000;
			top: 50%;
			right: 38%;
			transform:translate(-50%, -50%);
		}
	}
`;
function Follow() {
	return (
		<div className="follow">
			<ContentFollow className="content_follow">
				<h3>FOLLOW HEYYOU!</h3>
			</ContentFollow>
			<div className="flex items_box-follow">
				<div className="item-follow w-[16.6%] h-[255px]">
					<Image src={Images.facebook} />
				</div>
				<div className="item-follow  w-[16.6%]  h-[255px]">
					<Image src={Images.instagram} />
				</div>
				<div className="item-follow  w-[16.6%]  h-[255px]">
					<Image src={Images.groups} />
				</div>
				<div className="item-follow  w-[16.6%]  h-[255px]">
					<Image src={Images.maketplace} />
				</div>
				<div className="item-follow  w-[16.6%]  h-[255px]">
					<Image src={Images.tiktok} />
				</div>
				<div className="item-follow  w-[16.6%]  h-[255px]	">
					<Image src={Images.talk} />
				</div>
			</div>
		</div>
	);
}

export default Follow;
